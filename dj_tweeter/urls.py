from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from tweets.views import home, detail, user #gotta fix that
from accounts import views as accounts_view

urlpatterns = [
    path('', home, name='home'), #gotta fix that
    # careful here, cuz user may have a username register
    path('register', accounts_view.register, name='register'),
    path('<int:pk>', detail, name='detail'),
    path('<str:username>', user, name='user'),
    path('react/', TemplateView.as_view(template_name="react/react.html")),
    path('api/tweets/', include('tweets.urls')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

#just outta curiosity [<URLPattern '^static/(?P<path>.*)$'>]
print(static(settings.STATIC_URL, document_root=settings.STATIC_ROOT))