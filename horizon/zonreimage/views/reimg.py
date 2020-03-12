import os
from django.shortcuts import render
from zonreimage.services import pil_image
from django.core.files.storage import default_storage


def index(request):
    template_name = 'zonreimage/index.html'
    if request.method == 'POST':
        img = request.FILES.get('zon01')
        quality = int(request.POST.get('zon02'))
        result = pil_image(img, quality)
        context = {
            'img': result
        }
        # default_storage.delete(result)
        return render(request, template_name, context)
    return render(request, template_name)
