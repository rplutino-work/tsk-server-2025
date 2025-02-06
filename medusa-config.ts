import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
      port: parseInt(process.env.PORT || "9000", 10),  // Asegurar que use el puerto asignado por Render
    }
  },
  admin: {
    backendUrl: process.env.MEDUSA_BACKEND_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`,
  },
})

