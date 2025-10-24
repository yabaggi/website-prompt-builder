import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { motion } from 'framer-motion'

const FooterParameters = ({ value = {}, onChange }) => {
  const [footerType, setFooterType] = useState(value?.type || 'Standard Footer')
  const [footerOptions, setFooterOptions] = useState(value?.options || {})

  const handleTypeChange = (type) => {
    setFooterType(type)
    const newOptions = {}
    onChange({ type, options: newOptions })
  }

  const handleOptionChange = (key, val) => {
    const newOptions = { ...footerOptions, [key]: val }
    setFooterOptions(newOptions)
    onChange({ type: footerType, options: newOptions })
  }

  const footerTypes = [
    'Standard Footer',
    'Multi-Column Footer',
    'Minimal Footer',
    'Newsletter Footer',
    'Sticky Footer'
  ]

  const renderOptions = () => {
    switch (footerType) {
      case 'Standard Footer':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #1a1a1a"
                value={footerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Text Color</Label>
              <Input
                type="text"
                placeholder="e.g., #ffffff"
                value={footerOptions.textColor || ''}
                onChange={(e) => handleOptionChange('textColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Copyright Text</Label>
              <Input
                type="text"
                placeholder="e.g., © 2024 Your Company. All rights reserved."
                value={footerOptions.copyrightText || ''}
                onChange={(e) => handleOptionChange('copyrightText', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Multi-Column Footer':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Number of Columns</Label>
              <Select value={footerOptions.columnCount || '3'} onValueChange={(val) => handleOptionChange('columnCount', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Columns</SelectItem>
                  <SelectItem value="3">3 Columns</SelectItem>
                  <SelectItem value="4">4 Columns</SelectItem>
                  <SelectItem value="5">5 Columns</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #1a1a1a"
                value={footerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Include Social Links</Label>
              <Select value={footerOptions.socialLinks || 'yes'} onValueChange={(val) => handleOptionChange('socialLinks', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )
      case 'Minimal Footer':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #f5f5f5"
                value={footerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Padding</Label>
              <Input
                type="text"
                placeholder="e.g., 2rem 1rem"
                value={footerOptions.padding || ''}
                onChange={(e) => handleOptionChange('padding', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Footer Text</Label>
              <Input
                type="text"
                placeholder="e.g., © 2024 Your Company"
                value={footerOptions.footerText || ''}
                onChange={(e) => handleOptionChange('footerText', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Newsletter Footer':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Newsletter Heading</Label>
              <Input
                type="text"
                placeholder="e.g., Subscribe to Our Newsletter"
                value={footerOptions.newsletterHeading || ''}
                onChange={(e) => handleOptionChange('newsletterHeading', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Placeholder Text</Label>
              <Input
                type="text"
                placeholder="e.g., Enter your email"
                value={footerOptions.placeholderText || ''}
                onChange={(e) => handleOptionChange('placeholderText', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Button Text</Label>
              <Input
                type="text"
                placeholder="e.g., Subscribe"
                value={footerOptions.buttonText || ''}
                onChange={(e) => handleOptionChange('buttonText', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #1a1a1a"
                value={footerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Sticky Footer':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #1a1a1a"
                value={footerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Height</Label>
              <Input
                type="text"
                placeholder="e.g., 60px"
                value={footerOptions.height || ''}
                onChange={(e) => handleOptionChange('height', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Content Type</Label>
              <Select value={footerOptions.contentType || 'links'} onValueChange={(val) => handleOptionChange('contentType', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="links">Links</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
      <div className="space-y-2">
        <Label className="text-sm font-medium flex items-center gap-2">
          <span className="text-lg">🔗</span> Footer Type
        </Label>
        <Select value={footerType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full bg-white border-green-300">
            <SelectValue placeholder="Select footer type" />
          </SelectTrigger>
          <SelectContent>
            {footerTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {renderOptions()}
    </div>
  )
}

export default FooterParameters
