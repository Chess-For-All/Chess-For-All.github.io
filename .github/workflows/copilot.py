import openai

openai.api_key = "YOUR_API_KEY"  # замените YOUR_API_KEY на ваш реальный ключ

def ask_copilot(question):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": question}]
    )
    return response["choices"][0]["message"]["content"].strip()

if __name__ == "__main__":
    user_question = input("Введите вопрос: ")
    answer = ask_copilot(user_question)
    print("Ответ", answer)
