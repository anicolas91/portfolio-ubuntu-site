import type { FolderType } from './fileFolders.types'

const directoryArray = [
  'home',
  'documents',
  'documents/about',
  'documents/projects',
  'documents/skills',
  'music',
  'pictures',
  'trash',
] as const
export type DirectoryType = (typeof directoryArray)[number]
type DirectoryDataType = {
  name: string
  icon: string
}
export type DirectoryMap = {
  [k in DirectoryType]: DirectoryDataType
}

export type HomeFoldersType = {
  type: FolderType
  text: string
}

const terminalDirectoryOptionsArray = [
  '',
  'documents',
  'documents/about',
  'documents/projects',
  'documents/skills',
  'music',
  'picture',
] as const
export type TerminalDirectoryOptionsType =
  (typeof terminalDirectoryOptionsArray)[number]
