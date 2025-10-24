import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Upload, Link, Type, Image, Combine } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LogoParameters = ({ value, onChange }) => {
  const [logoType, setLogoType] = useState(value?.type || 'text')
  const [logoText, setLogoText] = useState(value?.text || '')
  const [logoImageUrl, setLogoImageUrl] = useState(value?.imageUrl || '')
  const [logoImageFile, setLogoImageFile] = useState(null)

  const handleLogoTypeChange = (newType) => {
    setLogoType(newType)
    updateLogoData(newType, logoText, logoImageUrl, logoImageFile)
  }

  const handleTextChange = (text) => {
    setLogoText(text)
    updateLogoData(logoType, text, logoImageUrl, logoImageFile)
  }

  const handleImageUrlChange = (url) => {
    setLogoImageUrl(url)
    updateLogoData(logoType, logoText, url, logoImageFile)
  }

  const handleFileChange = (file) => {
    setLogoImageFile(file)
    updateLogoData(logoType, logoText, logoImageUrl, file)
  }

  const updateLogoData = (type, text, imageUrl, imageFile) => {
    const logoData = {
      type,
      text: text || '',
      imageUrl: imageUrl || '',
      imageFile: imageFile || null,
      displayName: getDisplayName(type, text, imageUrl, imageFile)
    }
    onChange(logoData)
  }

  const getDisplayName = (type, text, imageUrl, imageFile) => {
    switch (type) {
      case 'text':
        return text ? `Text: "${text}"` : 'Text Logo'
      case 'image':
        if (imageFile) return `Image: ${imageFile.name}`
        if (imageUrl) return `Image: ${imageUrl.split('/').pop()}`
        return 'Image Logo'
      case 'combination':
        const parts = []
        if (text) parts.push(`Text: "${text}"`)
        if (imageFile) parts.push(`Image: ${imageFile.name}`)
        else if (imageUrl) parts.push(`Image: ${imageUrl.split('/').pop()}`)
        return parts.length > 0 ? parts.join(' + ') : 'Combination Logo'
      default:
        return 'Logo'
    }
  }

  useEffect(() => {
    updateLogoData(logoType, logoText, logoImageUrl, logoImageFile)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
    >
      {/* Logo Type Selection - Dropdown Only */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-blue-700 flex items-center gap-2">
          <Type className="w-4 h-4" />
          Logo Type
        </Label>
        <Select value={logoType} onValueChange={handleLogoTypeChange}>
          <SelectTrigger className="w-full border-blue-300 focus:border-blue-500">
            <SelectValue placeholder="Select logo type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-blue-600" />
                Text Logo
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-green-600" />
                Image Logo
              </div>
            </SelectItem>
            <SelectItem value="combination">
              <div className="flex items-center gap-2">
                <Combine className="w-4 h-4 text-purple-600" />
                Combination (Text + Image)
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Conditional Input Fields Based on Selection */}
      <AnimatePresence mode="wait">
        {(logoType === 'text' || logoType === 'combination') && (
          <motion.div
            key="text-input"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <Label htmlFor="logo-text" className="text-sm font-medium text-blue-700 flex items-center gap-2">
              <Type className="w-4 h-4" />
              Logo Text
            </Label>
            <Input
              id="logo-text"
              type="text"
              placeholder="Enter your logo text (e.g., 'My Company')"
              value={logoText}
              onChange={(e) => handleTextChange(e.target.value)}
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </motion.div>
        )}

        {(logoType === 'image' || logoType === 'combination') && (
          <motion.div
            key="image-input"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <Label className="text-sm font-medium text-green-700 flex items-center gap-2">
              <Image className="w-4 h-4" />
              Logo Image
            </Label>
            
            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="logo-file" className="text-xs text-gray-600">
                Upload from device:
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => document.getElementById('logo-file-input').click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
                <input
                  id="logo-file-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                />
                {logoImageFile && (
                  <span className="text-xs text-green-600 font-medium">
                    ✓ {logoImageFile.name}
                  </span>
                )}
              </div>
            </div>

            {/* URL Input */}
            <div className="space-y-2">
              <Label htmlFor="logo-url" className="text-xs text-gray-600">
                Or enter image URL:
              </Label>
              <div className="flex items-center gap-2">
                <Link className="w-4 h-4 text-green-600 flex-shrink-0" />
                <Input
                  id="logo-url"
                  type="url"
                  placeholder="https://example.com/logo.png"
                  value={logoImageUrl}
                  onChange={(e) => handleImageUrlChange(e.target.value)}
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              {logoImageUrl && (
                <div className="mt-2 p-2 bg-white rounded border border-gray-200">
                  <img
                    src={logoImageUrl}
                    alt="Logo preview"
                    className="max-w-32 max-h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                  <div className="text-xs text-red-500 hidden">
                    ⚠️ Unable to load image from URL
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default LogoParameters
