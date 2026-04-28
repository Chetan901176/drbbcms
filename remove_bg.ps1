Add-Type -AssemblyName System.Drawing

$srcPath = 'f:\Internship\DRBBCMS\drbbcms\public\logo.png'
$tmpPath = 'f:\Internship\DRBBCMS\drbbcms\public\logo_tmp.png'

$img = [System.Drawing.Bitmap]::new($srcPath)
$result = [System.Drawing.Bitmap]::new($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$threshold = 30


for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $pixel = $img.GetPixel($x, $y)
        $r = [int]$pixel.R
        $g = [int]$pixel.G
        $b = [int]$pixel.B
        if ($r -gt (255 - $threshold) -and $g -gt (255 - $threshold) -and $b -gt (255 - $threshold)) {
            $result.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            $result.SetPixel($x, $y, $pixel)
        }
    }
}

$result.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$result.Dispose()

# Replace original with transparent version
Remove-Item $srcPath -Force
Rename-Item $tmpPath $srcPath

Write-Host 'Background removed and logo saved successfully!'
