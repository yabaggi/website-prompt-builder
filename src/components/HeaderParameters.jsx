import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { motion } from 'framer-motion'

const HeaderParameters = ({ value = {}, onChange }) => {
  const [headerType, setHeaderType] = useState(value?.type || 'Standard Header')
  const [headerOptions, setHeaderOptions] = useState(value?.options || {})

  const handleTypeChange = (type) => {
    setHeaderType(type)
    const newOptions = {}
    onChange({ type, options: newOptions })
  }

  const handleOptionChange = (key, val) => {
    const newOptions = { ...headerOptions, [key]: val }
    setHeaderOptions(newOptions)
    onChange({ type: headerType, options: newOptions })
  }

  const headerTypes = [
    'Standard Header',
    'Hero Header',
    'Transparent Header',
    'Sticky Header',
    'Minimal Header'
  ]

  const renderOptions = () => {
    switch (headerType) {
      case 'Standard Header':
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
                placeholder="e.g., #ffffff, rgb(255,255,255)"
                value={headerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Text Color</Label>
              <Input
                type="text"
                placeholder="e.g., #000000, rgb(0,0,0)"
                value={headerOptions.textColor || ''}
                onChange={(e) => handleOptionChange('textColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Header Height</Label>
              <Input
                type="text"
                placeholder="e.g., 80px, 6rem"
                value={headerOptions.height || ''}
                onChange={(e) => handleOptionChange('height', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Hero Header':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Image URL</Label>
              <Input
                type="text"
                placeholder="https://example.com/hero-bg.jpg"
                value={headerOptions.backgroundImage || ''}
                onChange={(e) => handleOptionChange('backgroundImage', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Overlay Color</Label>
              <Input
                type="text"
                placeholder="e.g., rgba(0,0,0,0.5)"
                value={headerOptions.overlayColor || ''}
                onChange={(e) => handleOptionChange('overlayColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Hero Height</Label>
              <Input
                type="text"
                placeholder="e.g., 500px, 100vh"
                value={headerOptions.heroHeight || ''}
                onChange={(e) => handleOptionChange('heroHeight', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Transparent Header':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Text Color</Label>
              <Input
                type="text"
                placeholder="e.g., #ffffff"
                value={headerOptions.textColor || ''}
                onChange={(e) => handleOptionChange('textColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Scroll Background Color</Label>
              <Input
                type="text"
                placeholder="Color when scrolled (e.g., #ffffff)"
                value={headerOptions.scrollBgColor || ''}
                onChange={(e) => handleOptionChange('scrollBgColor', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Sticky Header':
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
                placeholder="e.g., #ffffff"
                value={headerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Shadow/Border</Label>
              <Input
                type="text"
                placeholder="e.g., 0 2px 10px rgba(0,0,0,0.1)"
                value={headerOptions.shadow || ''}
                onChange={(e) => handleOptionChange('shadow', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Minimal Header':
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
                placeholder="e.g., transparent"
                value={headerOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Padding</Label>
              <Input
                type="text"
                placeholder="e.g., 1rem 2rem"
                value={headerOptions.padding || ''}
                onChange={(e) => handleOptionChange('padding', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="space-y-2">
        <Label className="text-sm font-medium flex items-center gap-2">
          <span className="text-lg">🎨</span> Header Type
        </Label>
        <Select value={headerType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full bg-white border-blue-300">
            <SelectValue placeholder="Select header type" />
          </SelectTrigger>
          <SelectContent>
            {headerTypes.map((type) => (
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

export default HeaderParameters
