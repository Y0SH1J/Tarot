from flask import Flask, render_template
import os

app = Flask(__name__)
image_folder = " "
imagesMain = {}
cardsMain = {}

def path(specificPath, num):
    pathList = specificPath
    imagesDict = {}

    for i in pathList:
        image_folder = os.path.join(app.static_folder, 'images/', i)
        images = [f'images/{i}/{img}' for img in os.listdir(image_folder) if img.lower().endswith(('.png', '.jpg'))]
        imagesDict[i] = images
    
    return imagesDict

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/cards")
def cards():
    imagesMain = path(['Major', 'Cups', 'Pentacles', 'Swords', 'Wands'], 5)
    return render_template("cards.html", cards=cardsMain)

@app.route("/reading")
def reading():
    imagesMain = path(['Major', 'Cups', 'Pentacles', 'Swords', 'Wands'], 5)
    return render_template("reading.html", images=imagesMain)

if __name__ == "__main__":
    imagesMain = path(['Major', 'Cups', 'Pentacles', 'Swords', 'Wands'], 5)
    print(imagesMain)
