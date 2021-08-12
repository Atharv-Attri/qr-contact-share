USER_INFO = {
    "type": "object",
    "properties": {
        "user_id": { "type": "string" },
        "emails": { "type": "list" },
        "numbers": {"type": "list" }
    },
    "required": ["emails", "numbers"]
}

USER_LOGIN = {
    "type": "object",
    "properties": {
        "user_id": { "type": "string" },
        "email": { "type": "string" },
        "key": { "type": "string" },
        },
    "required": ["user_id","email", "key"]
}


