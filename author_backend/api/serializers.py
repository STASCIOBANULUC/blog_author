from rest_framework import serializers

from author_backend.models import Category, Verse


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['__all__']


class VerseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Verse
        fields = ['__all__']
