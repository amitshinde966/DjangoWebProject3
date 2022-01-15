from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def SearchSyllabus(request):
    data = request
    #find how we can access data from POST request
