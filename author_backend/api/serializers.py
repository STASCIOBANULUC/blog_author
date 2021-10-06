from rest_framework import serializers

from author_backend.models import Category, Verse


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['title', 'slug']


class VerseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Verse
        fields = ['category', 'title', 'text', 'consecrated', 'date_of_creation', 'date_add', 'publish', 'slug']


class ConsecratedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['title']

