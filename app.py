from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("/index.html")


@app.route("/buscar", methods=["GET", "POST"])
def mostrar_resultado():
    try:
        user_id = request.json.get("user_id")
        
        if user_id and user_id.isdigit() and len(user_id) <= 3: #verifica si es un numero y que no tenga mas de 3 digitos
            resultado = verificar_pago_membresia(user_id)

            if resultado:
                estado_pago = resultado["al_dia"]
                nombre = resultado["nombre"]
                mensaje = (
                    "Estas al día con la cuota. Gracias!"
                    if estado_pago
                    else "No está al día con el pago de la cuota."
                )
                imagen = "tick.png" if estado_pago else "cross.png"
                return render_template('resultado.html', mensaje=mensaje, imagen=imagen, nombre=nombre)
            else:
                return jsonify({"error": "Usuario no encontrado"}), 404
        else:
            return jsonify({"error": "Ingrese un user_id valido"}), 400
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def verificar_pago_membresia(user_id):
    try:
        conn = sqlite3.connect("mi_basedatos.db")
        cursor = conn.cursor()
    except Exception as e:
        return jsonify({"error": "No se pudo conectar con la base de datos"})

    try: 
        # Consulta SQL para verificar el estado de la membresía del usuario
        consulta = "SELECT Usuarios.nombre, CASE WHEN Membresias.cuota_pagada = 1 THEN 'Estas al día con el pago de la membresía.' ELSE 'No está al día con el pago de la membresía.' END AS estado_pago FROM Usuarios LEFT JOIN Membresias ON Usuarios.user_id = Membresias.user_id WHERE Usuarios.user_id = ?"

        cursor.execute(consulta, (user_id))

        resultado = cursor.fetchone()

        conn.close()

        # Accediendo a los valores de la tupla si hay un resultado
        if resultado is not None:
            nombre = resultado[0]
            estado_pago = resultado[1]
            al_dia = True if estado_pago == 'Estas al día con el pago de la membresía.' else False
            
            return {
                "nombre": nombre,
                "estado_pago": estado_pago,
                "al_dia": al_dia
            }
        else:
            return None
        
    except Exception as e:
        return jsonify({"error": "No se pudieron obtener los datos del usuario"})

if __name__ == "__main__":
    app.run(debug=True)
