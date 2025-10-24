import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { motion } from 'framer-motion'

const HeroSectionParameters = ({ value = {}, onChange }) => {
  const [heroType, setHeroType] = useState(value?.type || 'Standard Hero')
  const [heroOptions, setHeroOptions] = useState(value?.options || {})

  const handleTypeChange = (type) => {
    setHeroType(type)
    const newOptions = {}
    onChange({ type, options: newOptions })
  }

  const handleOptionChange = (key, val) => {
    const newOptions = { ...heroOptions, [key]: val }
    setHeroOptions(newOptions)
    onChange({ type: heroType, options: newOptions })
  }

  const heroTypes = [
    'Standard Hero',
    'Full-Width Image Hero',
    'Video Background Hero',
    'Animated/Interactive Hero',
    'Split Layout Hero'
  ]

  const renderOptions = () => {
    switch (heroType) {
      case 'Standard Hero':
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
                placeholder="e.g., #f0f0f0"
                value={heroOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Heading Text</Label>
              <Input
                type="text"
                placeholder="e.g., Welcome to Our Website"
                value={heroOptions.heading || ''}
                onChange={(e) => handleOptionChange('heading', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Subheading Text</Label>
              <Input
                type="text"
                placeholder="e.g., Discover amazing features"
                value={heroOptions.subheading || ''}
                onChange={(e) => handleOptionChange('subheading', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">CTA Button Text</Label>
              <Input
                type="text"
                placeholder="e.g., Get Started"
                value={heroOptions.ctaText || ''}
                onChange={(e) => handleOptionChange('ctaText', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Full-Width Image Hero':
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
                placeholder="https://example.com/hero-image.jpg"
                value={heroOptions.backgroundImage || ''}
                onChange={(e) => handleOptionChange('backgroundImage', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Overlay Opacity</Label>
              <Input
                type="text"
                placeholder="e.g., 0.5 (0-1)"
                value={heroOptions.overlayOpacity || ''}
                onChange={(e) => handleOptionChange('overlayOpacity', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Text Alignment</Label>
              <Select value={heroOptions.textAlignment || 'center'} onValueChange={(val) => handleOptionChange('textAlignment', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )
      case 'Video Background Hero':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Video URL</Label>
              <Input
                type="text"
                placeholder="https://example.com/hero-video.mp4"
                value={heroOptions.videoUrl || ''}
                onChange={(e) => handleOptionChange('videoUrl', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Fallback Image URL</Label>
              <Input
                type="text"
                placeholder="Fallback image if video doesn't load"
                value={heroOptions.fallbackImage || ''}
                onChange={(e) => handleOptionChange('fallbackImage', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Autoplay</Label>
              <Select value={heroOptions.autoplay || 'true'} onValueChange={(val) => handleOptionChange('autoplay', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )
      case 'Animated/Interactive Hero':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Animation Type</Label>
              <Select value={heroOptions.animationType || 'fade-in'} onValueChange={(val) => handleOptionChange('animationType', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fade-in">Fade In</SelectItem>
                  <SelectItem value="slide-up">Slide Up</SelectItem>
                  <SelectItem value="zoom-in">Zoom In</SelectItem>
                  <SelectItem value="parallax">Parallax</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Background Color</Label>
              <Input
                type="text"
                placeholder="e.g., #ffffff"
                value={heroOptions.backgroundColor || ''}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full"
              />
            </div>
          </motion.div>
        )
      case 'Split Layout Hero':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium">Left Content Type</Label>
              <Select value={heroOptions.leftContent || 'text'} onValueChange={(val) => handleOptionChange('leftContent', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="form">Form</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Right Content Type</Label>
              <Select value={heroOptions.rightContent || 'image'} onValueChange={(val) => handleOptionChange('rightContent', val)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="form">Form</SelectItem>
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
    <div className="space-y-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
      <div className="space-y-2">
        <Label className="text-sm font-medium flex items-center gap-2">
          <span className="text-lg">🎬</span> Hero Section Type
        </Label>
        <Select value={heroType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full bg-white border-orange-300">
            <SelectValue placeholder="Select hero type" />
          </SelectTrigger>
          <SelectContent>
            {heroTypes.map((type) => (
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

export default HeroSectionParameters
