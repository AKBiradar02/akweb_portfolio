# backend/models.py
from app.extensions import db
from datetime import datetime


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(250))
    project_link = db.Column(db.String(250))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "image_url": self.image_url,
            "project_link": self.project_link,
            "created_at": self.created_at.strftime('%Y-%m-%d %H:%M:%S')
        }
