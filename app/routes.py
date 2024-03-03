from flask import render_template, jsonify
from app import app
import random
import pandas as pd

# Simulando a criação do DataFrame com pandas
dados_imagens = "C:\\Users\\yurilima\\Desktop\\roleta-animes-aficiotaku\\dataframe-animes\\dataframe-animes.xlsx"
df_imagens = pd.read_excel(dados_imagens)


@app.route('/')
def index():
    return render_template('index.html', imagens=df_imagens)

@app.route('/girar_roleta')
def girar_roleta():
    imagem_girada = random.choice(df_imagens['src'])
    return jsonify({'imagem_girada': imagem_girada})
