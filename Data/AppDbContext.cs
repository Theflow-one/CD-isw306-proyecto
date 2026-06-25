using Microsoft.EntityFrameworkCore;
using backendISW306.Models;

namespace backendISW306.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Perfil> Perfiles { get; set; }

        public DbSet<Acceso> Accesos { get; set; }
    }
}