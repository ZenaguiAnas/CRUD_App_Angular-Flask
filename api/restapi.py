from flask import Flask, request, jsonify
import myCar as car
import json
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="",
    database="crudcar"
)


@app.route('/savecar', methods=['POST'])
def saveCar():
    args = request.json
    id_car = args.get('id')
    model = args.get('model')
    hp = args.get('hp')
    marque = args.get('marque')

    myCursor = mydb.cursor()

    mycar = car.Car(id_car, model, hp, marque)
    req = "insert into car (id_car, model, hp, marque) values (%s, %s, %s, %s)"
    val = (mycar.id_car, mycar.model, mycar.hp, mycar.marque)
    myCursor.execute(req, val)
    mydb.commit()

    return "Saved"


@app.route('/cars', methods=['GET'])
def getCars():
    mylist = []

    myCursor = mydb.cursor()
    myCursor.execute("SELECT * FROM car")
    myresult = myCursor.fetchall()
    for x in myresult:
        mylist.append(car.Car(x[0], x[1], x[2], x[3]).__dict__)

    return json.dumps(mylist)


@app.route('/cars/<int:car_id>', methods=['GET'])
def getCar(car_id):
    myCursor = mydb.cursor()
    myCursor.execute("SELECT * FROM car WHERE id_car = %s", (car_id,))
    myresult = myCursor.fetchone()
    if myresult:
        mycar = car.Car(myresult[0], myresult[1], myresult[2], myresult[3])
        return jsonify(mycar.__dict__)
    else:
        return jsonify({'message': 'Car not found'}), 404


@app.route('/cars/<int:car_id>', methods=['PUT'])
def updateCar(car_id):
    args = request.json
    model = args.get('model')
    hp = args.get('hp')
    marque = args.get('marque')

    myCursor = mydb.cursor()
    myCursor.execute("SELECT * FROM car WHERE id_car = %s", (car_id,))
    myresult = myCursor.fetchone()
    if myresult:
        req = "UPDATE car SET model = %s, hp = %s, marque = %s WHERE id_car = %s"
        val = (model, hp, marque, car_id)
        myCursor.execute(req, val)
        mydb.commit()
        return "Updated"
    else:
        return jsonify({'message': 'Car not found'}), 404


@app.route('/cars/<int:car_id>', methods=['DELETE'])
def deleteCar(car_id):
    myCursor = mydb.cursor()
    myCursor.execute("SELECT * FROM car WHERE id_car = %s", (car_id,))
    myresult = myCursor.fetchone()
    if myresult:
        req = "DELETE FROM car WHERE id_car = %s"
        val = (car_id,)  # Modify this line to pass car_id as a tuple
        myCursor.execute(req, val)
        mydb.commit()
        return "Deleted"
    else:
        return jsonify({'message': 'Car not found'}), 404



if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)