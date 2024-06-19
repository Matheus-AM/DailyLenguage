import os
def read_file(file_path):
  try:
    # Open the file in read mode
    with open(file_path, 'r') as f:
      # Read the entire content of the file
      content = f.read()
      return content
  except FileNotFoundError:
    print(f"Error: File not found - {file_path}")
    return None
  except Exception as e:
    print(f"Error reading file: {e}")
    return None
