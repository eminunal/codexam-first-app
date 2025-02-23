from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# 📌 Veritabanı oluşturma veya güncelleme
def create_database():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT
        )
    """)
    conn.commit()
    conn.close()

create_database()

# 📌 Kullanıcı kayıt işlemi (register)
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")  # 📌 Email tekrar eklendi
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"message": "Lütfen tüm alanları doldurun!"}), 400

    try:
        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
                       (username, email, password))
        conn.commit()
        conn.close()
        return jsonify({"message": "Kayıt başarılı!"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "Bu kullanıcı adı veya e-posta zaten alınmış!"}), 400

# 📌 Kullanıcı giriş işlemi (login)
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"message": "Lütfen tüm alanları doldurun!"}), 400

    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": "Giriş başarılı!"}), 200
    else:
        return jsonify({"message": "Kullanıcı adı veya şifre hatalı!"}), 401

# 📌 Kayıtlı kullanıcıları listeleme (email dahil)
@app.route("/users", methods=["GET"])
def get_users():
    try:
        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()
        cursor.execute("SELECT id, username, email FROM users")  # 📌 Email ekledik
        users = cursor.fetchall()
        conn.close()

        user_list = [{"id": row[0], "username": row[1], "email": row[2]} for row in users]  # 📌 Email gösteriliyor
        return jsonify(user_list)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
