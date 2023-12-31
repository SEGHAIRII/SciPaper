from django.db import models
from django.contrib.postgres.fields import ArrayField   
import requests
from xml.etree import ElementTree as ET
import pdftotext
from uuid import uuid4 as uuid
import os
# Create your models here.



class paper(models.Model):

    class Meta:
            default_related_name = "paper"
            get_latest_by = "date_insertion"
            verbose_name = "paper"
            verbose_name_plural = "papers"
    titre = models.CharField("titre", max_length=100, blank = True, null = True)
    p_id = models.UUIDField(primary_key=True, default=uuid, editable=False)
    resume = models.TextField("resume", blank = True)
    auteurs = ArrayField(models.CharField(max_length=100, blank = True, null = True), null = True, default = list, blank = True)
    mots_cles = ArrayField(models.CharField(max_length=100, blank = True, null = True), null = True, default = list, blank = True)
    institutions = ArrayField(models.CharField(max_length = 100, blank = True, null = True), null = True, default = list, blank = True)
    texte_integral = models.TextField("text integral", blank = True, null = True)
    file_pdf = models.FileField("file pdf", upload_to="uploads/", max_length=40000, blank = True, null = True)
    references = ArrayField(models.CharField(max_length=50, blank = True, null = True), null = True, default = list, blank = True)
    date_insertion = models.DateTimeField(auto_now_add=True, blank = True, null = True) 

    def __str__(self):
        return self.titre
    def __getMetaData(self):
        headers = {
        'Content-Type': 'application/binary',
        }

        data = self.file_pdf.read()
        response = requests.post('http://cermine.ceon.pl/extract.do',verify = False,  headers=headers, data=data)
        return response


    def save(self, *args, **kwargs):
        r = self.__getMetaData()
        root =  ET.fromstring(r.text)
        mots_cles = []
        auteurs = []
        institutions = []
        references = []
        for tag in root.iter():
            match tag.tag:
                case "article-title":
                    self.titre = tag.text
                case "abstract":
                    self.resume = tag.find('p').text
                case "kwd-group":
                    for t in tag:
                        mots_cles.append(t.text)
                case 'contrib':
                    for t in tag.iter("string-name"):
                        if(tag.get('contrib-type') == 'author'):
                            auteurs.append(t.text)
                        else:
                            institutions.append(t.text)
                case _:
                    continue
        
        self.auteurs = auteurs
        self.mots_cles = mots_cles
        self.institutions = institutions
        self.references = references
        file = ''
        super(paper, self).save(*args, **kwargs) 
        with open(self.file_pdf.path, "rb") as f:
            pdf = pdftotext.PDF(f, physical = True)
        
        for text in pdf:
            file = file + text
        self.texte_integral = file
        super(paper, self).save(*args, **kwargs) 
        
        
    def remove(self):
        os.remove("../uploads/" + self.file_pdf.path)
        super(paper, self).remove()

