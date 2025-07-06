from rest_framework import serializers
from .models import *

class ProductVariantSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(
        slug_field='name',
        queryset=ProductModel.objects.all()
    )
    color = serializers.SlugRelatedField(
        slug_field='color',
        queryset=ProductColor.objects.all()
    )
    size = serializers.SlugRelatedField(
        slug_field='size',
        queryset=ProductSize.objects.all()
    )
    class Meta:
        model = ProductVariant
        fields = '__all__'