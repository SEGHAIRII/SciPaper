from django.urls import path

from . import views

urlpatterns = [
    path("importDocument", views.create_document, name = 'import document'),
    path("deleteDocument", views.delete_document, name = 'delete document'),
    path("getDocuments", views.get_documents, name = 'get document'),
    path("updateDocument", views.update_document, name = 'update document'),
    path("filterDocuments", views.filter_documents, name = 'filter documents'),
    path("getPdf/<str:id>", views.get_pdf, name = 'get pdf'),
    path("getText/<str:id>", views.get_text, name = 'get text')
]