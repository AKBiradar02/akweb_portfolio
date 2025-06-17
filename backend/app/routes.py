from flask import Blueprint, request, jsonify
from .models import Project
from . import db

main = Blueprint('main', __name__)


@main.route('/api/projects', methods=['GET'])
@jwt_required()
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': p.id,
        'title': p.title,
        'description': p.description,
        'github_link': p.github_link,
        'image_url': p.image_url
    } for p in projects])


@main.route('/api/projects', methods=['POST'])
@jwt_required()
def add_project():
    data = request.json
    project = Project(
        title=data['title'],
        description=data['description'],
        github_link=data.get('github_link', ''),
        image_url=data.get('image_url', '')
    )
    db.session.add(project)
    db.session.commit()
    return jsonify({'message': 'Project added successfully'}), 201


@main.route('/api/projects/<int:id>', methods=['PUT'])
@jwt_required()
def update_project(id):
    project = Project.query.get_or_404(id)
    data = request.json
    project.title = data['title']
    project.description = data['description']
    project.github_link = data.get('github_link', '')
    project.image_url = data.get('image_url', '')
    db.session.commit()
    return jsonify({'message': 'Project updated successfully'})


@main.route('/api/projects/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_project(id):
    project = Project.query.get_or_404(id)
    db.session.delete(project)
    db.session.commit()
    return jsonify({'message': 'Project deleted successfully'})


from flask import request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from . import main

# Replace with your own secure credentials
ADMIN_USERNAME = "Abhay0205"
ADMIN_PASSWORD = "Classof2025"

@main.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == ADMIN_USERNAME and data['password'] == ADMIN_PASSWORD:
        token = create_access_token(identity="admin")
        return jsonify({'access_token': token}), 200
    return jsonify({'msg': 'Unauthorized'}), 401