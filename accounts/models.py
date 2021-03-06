from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #e.profile.followers.add(s) 
    #s.following.all() 
    followers = models.ManyToManyField(User, related_name='following')
    bio = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=250, null=True, blank=True)
    avatar = models.ImageField(default='default.jpg', upload_to='profile_pics')

def create_or_update_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

post_save.connect(create_or_update_profile, sender=User)