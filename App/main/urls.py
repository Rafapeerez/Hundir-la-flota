from django.contrib import admin
from django.urls import path
from .views import home, register, login_user, logout_user, error, game, delete, showProfile, modifyProfile, stadistics
from main import views

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("SignOut/", logout_user, name='logout_user'),
    path("Game/Help", views.home),
    path("Game/GameSelect", game, name='game'),
    path("Game/GameSelect/Error", views.error),
    path("Game/Profile", views.home),
    path("Game/Support", views.home),
    path("Game/Profile/", showProfile, name="showProfile"),
    path("delete/", delete, name='delete'),
    path("ModifyUser/", modifyProfile, name='modifyProfile'),
    path("stadistics/", stadistics, name='stadistics'),
]