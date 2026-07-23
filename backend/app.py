import google.generativeai as genai

genai.configure(api_key="AIzaSyBsDCK0f_LnWEpeThHJ1ggu4jcgMiIhLLU")

for model in genai.list_models():
    print(model.name)