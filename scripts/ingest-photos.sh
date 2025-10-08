#!/usr/bin/env bash
set -uo pipefail

ROOT="/home/capponuts/jrv-production"
TRAVAIL="$ROOT/public/travail"
PHOTOS="$ROOT/public/photos"
FFMPEG="$ROOT/ffmpeg"

declare -A MAP
MAP["photo architecture"]="architecture-espaces"
MAP["photo corporate"]="corporate"
MAP["photo Lien et passions"]="liens-passions"
MAP["photo événement"]="evenements-mariages"

mkdir -p "$PHOTOS"

optimize_one() {
  local src="$1"; shift
  local dest="$1"; shift
  mkdir -p "$(dirname "$dest")"
  # Convertir en JPEG, max 2560px côté long, qualité visuelle ~85
  "$FFMPEG" -hide_banner -y -i "$src" -vf "scale=2560:-2:force_original_aspect_ratio=decrease" -frames:v 1 -c:v mjpeg -q:v 3 -map_metadata -1 "$dest" >/dev/null 2>&1 || return 1
}

for srcdir in "${!MAP[@]}"; do
  inDir="$TRAVAIL/$srcdir"
  outDir="$PHOTOS/${MAP[$srcdir]}"
  [ -d "$inDir" ] || continue
  mkdir -p "$outDir"

  # Traiter jpg/jpeg/png/webp/avif
  while IFS= read -r -d '' f; do
    base="$(basename "$f")"
    [[ "$base" =~ Zone\.Identifier$ ]] && continue
    name="${base%.*}"
    dest="$outDir/$name.jpg"
    optimize_one "$f" "$dest" || true
  done < <(find "$inDir" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.avif' \) -print0)
done

# Nettoyage: supprimer fichiers dans travail mais conserver l'ossature
if [ -d "$TRAVAIL" ]; then
  find "$TRAVAIL" -type f -not -name '.gitkeep' -delete || true
fi

echo "Ingestion terminée."


