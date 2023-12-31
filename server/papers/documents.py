from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import paper


@registry.register_document
class paperDocument(Document):
    auteurs = fields.ListField(fields.TextField())
    def prepare_auteurs(self ,instance):
        a = []
        for i in instance.auteurs:
            a.append(i)
        return a
    
    
    mots_cles = fields.ListField(fields.TextField())
    def prepare_mots_cles(self, instance):
        a = []
        for i in instance.mots_cles:
            a.append(i)
        return a
    
    
    institutions = fields.ListField(fields.TextField())
    def prepare_institutions(self, instance):
        a = []
        for i in instance.institutions:
            a.append(i)
        return a
    
    
    class Index:
        # Name of the Elasticsearch index
        name = 'papers'
        # See Elasticsearch Indices API reference for available settings
        settings = {'number_of_shards': 1,
                    'number_of_replicas': 0}

    class Django:
        model = paper # The model associated with this Document

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'titre',
            'p_id',
            'date_insertion'
        ]