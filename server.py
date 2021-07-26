from flask import Flask, request
from flask_restful import Resource, Api
from deta import Deta
from dotenv import load_dotenv
import os

app = Flask(__name__)
api = Api(app)

deta = Deta(os.environ["DETA_KEY"])

