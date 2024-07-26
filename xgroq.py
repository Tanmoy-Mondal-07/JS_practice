import os
import asyncio
from groq import AsyncGroq
from dotenv import load_dotenv, dotenv_values
load_dotenv()
import groq
from groq import Groq

client = Groq(
        api_key=os.environ.get("GROQ_API_KEY"),
    )

try:
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "you are a frontend dev"
            },
            {
                "role": "user",
                "content": """ """,
            },
        ],
        model="llama3-70b-8192",
        max_tokens=1000,
        temperature=0.5,
    )
    print(chat_completion.choices[0].message.content)

except groq.APIConnectionError as e:
    print("The server could not be reached")
    print(e.__cause__)
except groq.RateLimitError as e:
    print("A 429 status code was received; we should back off a bit.")
except groq.APIStatusError as e:
    print("Another non-200-range status code was received")
    print(e.status_code)
    print(e.response)