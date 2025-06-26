from django.db import models
from django.conf import settings

class Notification(models.Model):
    
    NOTIFICATION_CHOICES = (
        ('order', 'Order Update'),
        ('pyment', 'Pyment Update'),
    )
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_CHOICES)
    read = models.BooleanField(default=False)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "_all_"