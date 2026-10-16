Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot "..\public\priyanshi-sakariya.jpg"
$outJpg = Join-Path $PSScriptRoot "..\public\Priyanshi_Sakariya_Profile_Picture.jpg"
$outPng = Join-Path $PSScriptRoot "..\public\Priyanshi_Sakariya_Profile_Picture.png"

$src = [System.Drawing.Image]::FromFile($srcPath)

# 1:1 Square (1080 x 1080) for LinkedIn / Freelancer Profile Picture
$targetSize = 1080
$bmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background color matching the studio wall: #f4f5f7
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244, 245, 247))
$g.FillRectangle($bgBrush, 0, 0, $targetSize, $targetSize)

# Scale photo so the head and shoulders fit nicely with breathing margin
# Her original photo is 939w x 1024h
# Scaling to 990w x 1080h centered horizontally
$destWidth = 990
$destHeight = [int]($src.Height * ($destWidth / $src.Width))
$x = [int](($targetSize - $destWidth) / 2)
$y = 0

$g.DrawImage($src, $x, $y, $destWidth, $destHeight)

# Save high quality JPEG & PNG
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

$bmp.Save($outJpg, $jpegCodec, $encoderParams)
$bmp.Save($outPng, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Created 1:1 Profile Picture at: $outJpg and $outPng"
