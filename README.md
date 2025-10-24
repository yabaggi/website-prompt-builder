Website Prompt BuilderAn enhanced AI-powered tool for creating professional web development prompts with visual previews and code generation capabilities.🚀 Features✨ Enhanced Component Selection•Visual Preview System: Real-time website mockups as you select components•Detailed Parameters: Configurable options for each component (starting with Logo)•Project Templates: Quick-start templates for common website types•Multi-Framework Support: Generate code for HTML/CSS, React, Vue.js, Angular, and Svelte🎯 Logo Component Enhancement•Single Dropdown Interface: Clean, user-friendly selection•Three Logo Types:•Text Logo (custom text input)•Image Logo (file upload + URL input with preview)•Combination (both text and image options)•Smart Conditional Fields: Only relevant inputs appear based on selection•Enhanced Prompt Generation: Detailed logo specifications included in AI prompts🛠 Technical Features•React + Vite: Modern development stack•Tailwind CSS: Professional styling with smooth animations•Responsive Design: Works perfectly on desktop and mobile•Component Architecture: Modular, extensible design for easy enhancement🎨 User Experience1.Select Template (optional): Choose from Startup, E-commerce, or Portfolio templates2.Choose Components: Select from organized categories (General, Basic, Advanced)3.Configure Parameters: Detailed options for each component (Logo example implemented)4.Generate Output:•AI-ready prompts with detailed specifications•Framework-specific code generation•Visual preview of website structure🏗 ArchitectureComponent StructureCopysrc/
├── components/
│   ├── LogoParameters.jsx     # Enhanced logo configuration
│   ├── VisualPreview.jsx      # Real-time mockup generation
│   ├── CodeGenerator.jsx      # Multi-framework code output
│   └── ui/                    # Reusable UI components
├── App.jsx                    # Main application logic
└── main.jsx                   # Application entry point
Key Features Implementation•State Management: React hooks for component selection and parameters•Conditional Rendering: Smart UI that adapts to user selections•Animation System: Smooth transitions using Framer Motion•Code Generation: Template-based output for multiple frameworks🚀 Getting StartedPrerequisites•Node.js 18+•pnpm (recommended) or npmInstallationCopy# Clone the repository
git clone <repository-url>
cd website-prompt-builder

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
DevelopmentCopy# Start development server with host access
pnpm run dev --host --port 3000

# Build and preview
pnpm run build && pnpm run preview
🎯 Usage ExamplesBasic Usage1.Open the application2.Click "Basic" tab3.Select "Logo" component4.Choose logo type from dropdown5.Fill in the relevant parameters6.Click "Generate Prompt" to see AI-ready specificationsAdvanced Usage•Use project templates for quick setup•Combine multiple components for complex websites•Generate framework-specific code•Export prompts for AI development tools🔧 ConfigurationLogo ParametersThe logo component supports three types:•Text Logo: Custom text with styling options•Image Logo: File upload or URL with preview•Combination: Both text and image elementsExtending ComponentsTo add parameters to other components:1.Create a new parameter component (follow LogoParameters.jsx pattern)2.Add conditional rendering in App.jsx3.Update prompt generation logic4.Add visual preview support🌟 RoadmapPlanned EnhancementsHeader component parameters (layout, navigation items, styling)Hero section configuration (backgrounds, content alignment, CTAs)Form builder with field types and validationNavigation menu customizationColor scheme and typography optionsExport to popular design toolsUser accounts and project savingCollaboration featuresTechnical ImprovementsTypeScript migrationEnhanced testing suitePerformance optimizationsAccessibility improvementsPWA capabilities🤝 Contributing1.Fork the repository2.Create a feature branch (git checkout -b feature/amazing-feature)3.Commit your changes (git commit -m 'Add amazing feature')4.Push to the branch (git push origin feature/amazing-feature)5.Open a Pull Request📝 LicenseThis project is licensed under the MIT License - see the LICENSE file for details.🙏 Acknowledgments•Built with Manus AI - AI-powered development platform•UI components inspired by modern design systems•Icons from Lucide React•Styling with Tailwind CSS🔗 Links•Live Demo: Website Prompt Builder•Manus AI: https://manus.im•Documentation: See /docs folder for detailed guidesBuilt with ❤️ using Manus AI
