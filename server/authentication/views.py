
from django.http import HttpResponse, HttpResponseForbidden, HttpResponseNotFound
from .models import BasicUser, moderator, admin
from papers.models import paper
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login as djlogin, logout as djlogout
from operator import itemgetter
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required, user_passes_test
from custom_decorators import permission_required
# Create your views here.
def index(request):
    return HttpResponse("hello world")

@csrf_exempt    
def register(request):
    if request.method == 'POST':
        username, password ,first_name, last_name, email, gender, role = itemgetter('username','password', 'first_name', 'last_name', 'email', 'gender', 'role')(json.loads(request.body))
        user = authenticate(username = username, password = password)
        if user is not None:
            return HttpResponseForbidden("Email Already exists")
        else:
            user = User.objects.create_user(username = username, email = email, password = password, first_name = first_name, last_name = last_name)
            group = Group.objects.get(name = role)
            user.groups.add(group)
            if role == 'basic user':
                basic_user = BasicUser(user = user, gender = gender)
                basic_user.save()
            elif role == 'moderator':
                mod = moderator(user = user, gender = gender)
                mod.save()
            elif role == 'admin':
                adm = admin(user = user, gender = gender)
                adm.save()
            
            return HttpResponse("created user successefully")


@csrf_exempt
def login(request):
    if request.method == 'POST':
        username, password = itemgetter('username', 'password')(json.loads(request.body))
        user = authenticate(username = username, password = password)
        if user is not None :
            djlogin(request, user)
            return HttpResponse("user logged in successfully")
        else:
            return HttpResponseNotFound("user not found")
        
        
@csrf_exempt    
def logout(request):
    if request.method == 'POST':
        djlogout(request)
        return HttpResponse("logout successfully")


@csrf_exempt
@login_required
def deleteAccount(request):
    if request.method == 'DELETE':
        user = request.user
        user.delete()
        return HttpResponse("user removed successefully")
    


@csrf_exempt
@login_required
@permission_required('authentication.delete_moderator',"admin",  login_url = "/")
def deleteModerator(request):
    if (request.method == 'DELETE'):
          username = itemgetter('username')(json.loads(request.body))
          mod = User.objects.get(username = username)
          mod.delete()
          return HttpResponse("moderator deleted with success")
      
