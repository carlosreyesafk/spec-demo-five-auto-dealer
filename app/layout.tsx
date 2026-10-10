export const metadata = {
  title: 'FIVE Auto Dealer | Dealer de vehículos · Santo Domingo',
  description: 'En FIVE Auto Dealer te ayudamos a encontrar el vehículo ideal: inventario disponible, opciones de financiamiento y atención directa por WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
