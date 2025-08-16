"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Upload, 
  Download, 
  FileText, 
  Image, 
  File, 
  Trash2, 
  Eye,
  FolderOpen,
  Plus
} from "lucide-react"

interface FileItem {
  id: string
  name: string
  type: "image" | "document" | "logo" | "other"
  size: string
  uploadedAt: string
  category: "brand-materials" | "documents" | "contracts" | "invoices"
}

export function FilesSection() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: "1",
      name: "company-logo.png",
      type: "logo",
      size: "2.4 MB",
      uploadedAt: "2024-01-15",
      category: "brand-materials"
    },
    {
      id: "2",
      name: "brand-guidelines.pdf",
      type: "document",
      size: "1.8 MB",
      uploadedAt: "2024-01-20",
      category: "brand-materials"
    },
    {
      id: "3",
      name: "project-contract.pdf",
      type: "document",
      size: "3.2 MB",
      uploadedAt: "2024-01-10",
      category: "contracts"
    },
    {
      id: "4",
      name: "invoice-january.pdf",
      type: "document",
      size: "0.8 MB",
      uploadedAt: "2024-02-01",
      category: "invoices"
    },
    {
      id: "5",
      name: "product-images.zip",
      type: "image",
      size: "15.6 MB",
      uploadedAt: "2024-01-25",
      category: "brand-materials"
    }
  ])

  const [uploading, setUploading] = useState(false)

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image className="h-5 w-5 text-blue-500" />
      case "document":
        return <FileText className="h-5 w-5 text-green-500" />
      case "logo":
        return <File className="h-5 w-5 text-purple-500" />
      default:
        return <File className="h-5 w-5 text-slate-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "brand-materials":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "documents":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "contracts":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "invoices":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploading(true)
      // Simulate upload
      setTimeout(() => {
        const newFile: FileItem = {
          id: Date.now().toString(),
          name: file.name,
          type: file.type.startsWith('image/') ? 'image' : 'document',
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          uploadedAt: new Date().toISOString().split('T')[0],
          category: "brand-materials"
        }
        setFiles([newFile, ...files])
        setUploading(false)
      }, 2000)
    }
  }

  const handleDownload = (file: FileItem) => {
    // Simulate download
    const link = document.createElement('a')
    link.href = '#'
    link.download = file.name
    link.click()
  }

  const handleDelete = (fileId: string) => {
    setFiles(files.filter(f => f.id !== fileId))
  }

  const filteredFiles = (category: string) => {
    return files.filter(file => file.category === category)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Files & Documents
          </CardTitle>
          <CardDescription>
            Upload your brand materials and download project documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Upload Section */}
          <div className="mb-6 p-6 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-center">
            <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              Upload Files
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Drag and drop files here, or click to select files
            </p>
            <div className="flex items-center justify-center gap-4">
              <Input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                accept="image/*,.pdf,.doc,.docx,.zip"
              />
              <label htmlFor="file-upload">
                <Button asChild>
                  <span>
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Choose Files
                      </>
                    )}
                  </span>
                </Button>
              </label>
            </div>
          </div>

          {/* Files Tabs */}
          <Tabs defaultValue="brand-materials" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="brand-materials">Brand Materials</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="brand-materials" className="space-y-4">
              <div className="grid gap-4">
                {filteredFiles("brand-materials").map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(file.category)}>
                        Brand Material
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(file)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(file.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <div className="grid gap-4">
                {filteredFiles("documents").map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(file.category)}>
                        Document
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(file)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(file.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contracts" className="space-y-4">
              <div className="grid gap-4">
                {filteredFiles("contracts").map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(file.category)}>
                        Contract
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(file)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="invoices" className="space-y-4">
              <div className="grid gap-4">
                {filteredFiles("invoices").map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(file.category)}>
                        Invoice
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(file)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 