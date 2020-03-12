import os
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from PIL import Image
import random


def pil_image(img, quality):
    try:
        # name = ''.join(random.choice('0123456789') for i in range(16))
        path = default_storage.save('tmp/{}'.format(img), ContentFile(img.read()))
        print(path)

        tmp_file = os.path.join(settings.MEDIA_ROOT, path)
        print(tmp_file)

        with Image.open(img) as im:
            if im.format == "PNG":
                picture = im.convert(mode='P', palette=Image.ADAPTIVE)
                picture.save(tmp_file, optimize=True, quality=60)
            else:
                im.save(tmp_file, optimize=True, quality=quality)
    except IOError:
        pass
    return path