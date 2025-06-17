from app import create_app

# Create the Flask app instance using the factory method
app = create_app()

# Run the app if this file is executed directly
if __name__ == '__main__':
    app.run(debug=True)
