/**
 * @author Rhea Mimi Carillo @RheaMimiCarillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club @uwtgdc <https://github.com/uwtgdc>
 * @version 21 October 2025
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE to future maintainers of this lesson: if we decide to rename the repo, update this constant to reflect the new name
const base = '/git-basics-workshop/'

export default defineConfig({
  plugins: [react()],
  base
})
