from rest_framework import serializers
from .models import *

class ProductUnderwearVariantSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(
        slug_field='name',
        queryset=ProductUnderwearModel.objects.all()
    )
    color = serializers.SlugRelatedField(
        slug_field='color',
        queryset=ProductUnderwearColor.objects.all()
    )
    size = serializers.SlugRelatedField(
        slug_field='size',
        queryset=ProductUnderwearSize.objects.all()
    )
    class Meta:
        model = ProductUnderwearVariant
        fields = '__all__'