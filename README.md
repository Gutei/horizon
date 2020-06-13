# horizon

This project for handling large image when uploading file.

#Installation:

Clone this repository, Extract the file that you've downloaded.


## The project structure should be like this:
```
- horizon/
    - ...
    - horizon
        - __init__.py
        - settings.py
        - settings_base_dev.py
        - settings_reimage_dev.py
        - urls.py
        - wsgi.py
    - ...
    - manage.py
```

## Create the virtual environment to this project (i'm using python3.6):

Ubuntu (i'm using ubuntu 20.04):
```
$ python3.8 -m venv venv
```
## then source to this virtual environment:
```
$ source venv/bin/activate
```
## Install requirements.txt:
```
$ pip install -r requirements.txt
```
## And open directory dash:
```
$ cd horizon
```

# To Running Project

## Export the settings_reimage_dev to the environment variable:

Ubuntu:
```
$ export DJANGO_SETTINGS_MODULE=settings_reimage_dev
```

## You don't need to migrate!


## Collect all static files:

```
$ ./manage.py collectstatic
```


## Then run server:

```
$ ./manage.py runserver
``` 

If you got some error please contact me : anggeraryp@gmail.com
