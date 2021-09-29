from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from author_backend.api.serializers import CategorySerializer, VerseSerializer
from author_backend.models import Category, Verse


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)


class VerseViewSet(viewsets.ModelViewSet):
    queryset = Verse.objects.all().order_by('-date_add')
    serializer_class = VerseSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)
