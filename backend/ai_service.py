import google.generativeai as genai
from dotenv import load_dotenv
import os
from prompts import SYSTEM_PROMPT

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


# def generate_ai_response(messages):

#     conversation=""
#     for msg in messages:
#         conversation += f"{msg.role}: {msg.text}\n"

#     prompt = f"""
#         {SYSTEM_PROMPT}

#         Conversation History:
#         {conversation}

#         Respond naturally to the latest user message.
#         """


#     response = model.generate_content(
#         prompt,
#         generation_config=genai.types.GenerationConfig(
#             max_output_tokens=220,
#             temperature=0.65,
#         )
#     )

#     return response.text


def stream_ai_response(messages):

    try:

        conversation = ""

        for msg in messages:
            conversation += f"{msg.role}: {msg.text}\n"

        prompt = f"""
        {SYSTEM_PROMPT}

        Conversation History:
        {conversation}

        Respond naturally to the latest user message.
        """

        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                max_output_tokens=400,
                temperature=0.65,
            ),
            stream=True,
        )

        for chunk in response:

            if chunk.text:
                yield chunk.text

    except Exception as e:

        print("STREAM ERROR:", e)

        yield "Sorry, the AI assistant is temporarily unavailable right now."
