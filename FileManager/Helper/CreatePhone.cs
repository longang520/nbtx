﻿using Helpers;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileManager
{
    public class CreatePhone
    {
        static Color[] list = { Color.FromArgb(23, 194, 149), Color.FromArgb(77, 169, 235), Color.FromArgb(242, 114, 94), Color.FromArgb(247, 181, 94), Color.FromArgb(179, 137, 121), Color.FromArgb(86, 138, 173), Color.FromArgb(138, 138, 138) };
        static Random rnd = new Random();
        static int width = 100;
        static int height = 100;
        static int fontSize = 30;
        public static void Create(string str, string path)
        {
            if (str == null || str.Trim() == String.Empty)
                return;
            
            Bitmap image = new Bitmap(width, height);
            Graphics g = Graphics.FromImage(image);
            g.SmoothingMode = SmoothingMode.AntiAlias;  //使绘图质量最高，即消除锯齿
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.CompositingQuality = CompositingQuality.HighQuality;
            try
            {
                string s = str;
                if (str.Length > 2)
                {
                    s = str.Substring(str.Length - 2, 2);
                }
                //清空图片背景色
                SolidBrush brush2 = new SolidBrush(Color.FromArgb(0, 255, 255, 255));  //A为透明度
                g.FillRectangle(brush2, 0, 0, width, height);

                Color color = Color.FromArgb(242, 114, 94);

                Color myColor = list[rnd.Next(0, list.Length - 1)];
                SolidBrush brush1 = new SolidBrush(myColor);
                g.FillEllipse(brush1, 0, 0, width, height);//画填充椭圆的方法，x坐标、y坐标、宽、高，如果是100，则半径为50
                //Font(字体 大小 粗细
                
                Font font = new System.Drawing.Font("微软雅黑", fontSize, (System.Drawing.FontStyle.Regular));
                //LinearGradientBrush的参数是画的图像,起始颜色,简便的终止颜色,粗细,true
                SolidBrush brush = new SolidBrush(Color.White);
                //System.Drawing.Drawing2D.LinearGradientBrush brush = new System.Drawing.Drawing2D.LinearGradientBrush(new Rectangle(0, 0, image.Width, image.Height), Color.White, Color.White, 1.2f, true);
                int fontSizeZhen = (fontSize + fontSize / 3);
                g.DrawString(s, font, brush, (width- fontSizeZhen * 2 - fontSizeZhen / 3) /2, (height- fontSizeZhen)/5*2);//文本 字体 颜色 起始位置x 起始位置y

                //画图片的边框线
                //g.DrawRectangle(new Pen(Color.Silver), 0, 0, image.Width - 1, image.Height - 1);

                image.Save(path, System.Drawing.Imaging.ImageFormat.Png);
            }
            finally
            {
                g.Dispose();
                image.Dispose();
            }
        }
        public static void Create(List<string> pathList, string path)
        {
            Bitmap image = new Bitmap(width, height);
            Image image1 = null;
            Image image2 = null;
            Image image3 = null;
            Image image4 = null;
            Graphics g = Graphics.FromImage(image);
            g.SmoothingMode = SmoothingMode.AntiAlias;  //使绘图质量最高，即消除锯齿
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.CompositingQuality = CompositingQuality.HighQuality;

            SolidBrush brush = new SolidBrush(Color.FromArgb(0,255,255,255));  //A为透明度
            g.FillRectangle(brush, 0, 0, width, height);

            try
            {
                if (pathList.Count == 3)
                {
                    image1 = ImageHelper.GetThumbnail(Image.FromFile(pathList[0]), width / 2, height / 2);
                    image2 = ImageHelper.GetThumbnail(Image.FromFile(pathList[1]), width / 2, height / 2);
                    image3 = ImageHelper.GetThumbnail(Image.FromFile(pathList[2]), width / 2, height / 2);
                    g.DrawImage(image1, new Point(width / 2, 0));
                    g.DrawImage(image2, new Point(0, width / 2));
                    g.DrawImage(image3, new Point(width / 2, width / 2));

                }
                else
                {
                    image1 = ImageHelper.GetThumbnail(Image.FromFile(pathList[0]), width / 2, width / 2);
                    image2 = ImageHelper.GetThumbnail(Image.FromFile(pathList[1]), width / 2, width / 2);
                    image3 = ImageHelper.GetThumbnail(Image.FromFile(pathList[2]), width / 2, width / 2);
                    image4 = ImageHelper.GetThumbnail(Image.FromFile(pathList[3]), width / 2, width / 2);
                    g.DrawImage(image1, new Point(0, 0));
                    g.DrawImage(image2, new Point(0, width / 2));
                    g.DrawImage(image3, new Point(width / 2, 0));
                    g.DrawImage(image4, new Point(width / 2, width / 2));
                }
                image.Save(path, System.Drawing.Imaging.ImageFormat.Png);
            }
            finally
            {
                g.Dispose();
                image.Dispose();
            }
        }
    }
}