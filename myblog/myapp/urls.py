from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('gallery/', views.gallery, name='gallery'),
    path('form/', views.form, name='form'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
    path('submit_review/', views.submit_review, name='submit_review'),
    path('update_review/<int:review_id>/', views.update_review, name='update_review'),
    path('delete_review/<int:review_id>/', views.delete_review, name='delete_review'),
]