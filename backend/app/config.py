# backend/config.py
class Config:
    SECRET_KEY = 'hardcoded-secret-key'
    SQLALCHEMY_DATABASE_URI = "postgresql://akuser:PJ7aqcVsXCRn4txujMIF7VM8Yw9ObuYw@dpg-d18mdv8gjchc739ahhq0-a/akwebdb"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'super-secret-admin-token'