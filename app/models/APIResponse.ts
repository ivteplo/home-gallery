// Copyright (c) 2022 Ivan Teplov

type APIResponse<Data = string> = {
  type: "success" | "error"
  message: string
  data: Data
}

export default APIResponse
