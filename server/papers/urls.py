from django.urls import path

from . import views

urlpatterns = [
    path("importDocument", views.create_document, name = 'import document'),
    path("deleteDocument", views.delete_document, name = 'delete document'),
    path("getDocument", views.get_document, name = 'get document'),
    path("updateDocument", views.update_document, name = 'update document'),
    path("getDocument", views.filter_documents, name = 'filter documents'),
    path("getPdf", views.get_pdf, name = 'get pdf')
]