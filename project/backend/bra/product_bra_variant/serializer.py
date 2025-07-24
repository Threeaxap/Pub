from rest_framework import serializers
from .models import *

class ProductBraVariantSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(
        slug_field='name',
        queryset=ProductBraModel.objects.all()
    )
    color = serializers.SlugRelatedField(
        slug_field='color',
        queryset=ProductBraColor.objects.all()
    )
    size = serializers.SlugRelatedField(
        slug_field='size',
        queryset=ProductBraSize.objects.all()
    )
    class Meta:
        model = ProductBraVariant
        fields = '__all__'