// Copyright (c) 2022 Ivan Teplov

import { Accessor, Component, createContext, createSignal, JSX, useContext } from "solid-js"
import { UploadFile } from "@solid-primitives/upload"
import { useNavigate } from "solid-app-router"

type FileUploadingContextType = {
  uploadedFiles: Accessor<UploadFile[]>
  setUploadedFiles: (files: UploadFile[]) => void
}

export const FileUploadingContext = createContext<FileUploadingContextType>()
export default FileUploadingContext

type ProviderProps = {
  children?: JSX.Element | JSX.Element[]
}

export const FileUploadingContextProvider: Component<ProviderProps> = (props) => {
  const [uploadedFiles, setUploadedFiles_] = createSignal<UploadFile[]>([])
  const navigate = useNavigate()

  const setUploadedFiles = (files: UploadFile[]) => {
    setUploadedFiles_(files)
    navigate("/uploading")
  }

  return (
    <FileUploadingContext.Provider value={{ uploadedFiles, setUploadedFiles }}>
      {props.children}
    </FileUploadingContext.Provider>
  )
}

export const useFileUploadingContext = () => useContext(FileUploadingContext)
