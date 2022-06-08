// Copyright (c) 2022 Ivan Teplov

type APIResponse<Data = string> = {
  type: string
  message: string
  data: Data
}

export default APIResponse
